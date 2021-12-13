import React, { useEffect, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import Typography from "@mui/material/Typography";

const mermaidGenerator = (procedure) => {
  let buffer = 'graph TD\n    I((Inicio))-->A\n';
  let taskDefMap = {};
  procedure.tasks.forEach((task) => {
      taskDefMap[task.id] = task.type === 'form' ? `${task.id}("${task.id}: ${task.title}")` : `${task.id}[/"${task.id}: ${task.title}"/]`;
      buffer += `    ${taskDefMap[task.id]}\n`;
      if(task.isEnd) {
          buffer += `    ${task.id}-->((Fin))\n`;
      }
  });
  procedure.tasks.forEach((task, i) => {
      task.actions.forEach((action) => {
          if(0 && action.else) {
              buffer += `    ${task.id}-->R${i}{${action.label}}\n`;
              buffer += `    R${i}--"sí"-->${action.goto}\n`;
              buffer += `    R${i}--"no"-->${action.else}\n`;
          } else {
              buffer += action.label ? `    ${task.id}--"${action.label}"-->${action.goto}\n` : `    ${task.id}-->${action.goto}\n`;
              if(action.else) {
                  buffer += `    ${taskDefMap[task.id]}--"${action.labelElse}"-->${action.else}\n`;
              }
          }
      })
  });
  console.log(buffer)
  return buffer;
}


export default function Mermaid({ procedure, id }) {
  const [svg, setSvg] = useState('')
  useEffect(() => {
    window.mermaid.initialize({ startOnLoad: false })
  }, [])

  useLayoutEffect(() => {
    if (!procedure) return <Typography>No hay proceso para mostrar</Typography>
    try {
      window.mermaid.mermaidAPI.render(String(id) || procedure.title, mermaidGenerator(procedure), (svg) => {
        setSvg(svg)
      })
    } catch(err) {
      setSvg('')
    }
  }, [procedure])
  if(!svg) {
    return <Typography>Error al procesar el proceso</Typography>
  }
  return (
    <div
      className={'mermaid'}
      dangerouslySetInnerHTML={{ __html: svg }}
    ></div>
  )
}