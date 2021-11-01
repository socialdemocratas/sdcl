import * as React from 'react';

import {
    mdiFormatQuoteOpen,
    mdiFormatQuoteOpenOutline,
    mdiDotsGrid,
    mdiFileCabinet,
    mdiGraphOutline,
    mdiInformationVariant
} from '@mdi/js';

import { createSvgIcon } from '@mui/material/utils';

export const FormatQuoteOpen = createSvgIcon(<path d={mdiFormatQuoteOpen} />, 'FormatQuoteOpen');
export const FormatQuoteOpenOutline = createSvgIcon(<path d={mdiFormatQuoteOpenOutline} />, 'FormatQuoteOpenOutline');
export const DotsGrid = createSvgIcon(<path d={mdiDotsGrid} />, 'DotsGrid');
export const FileCabinet = createSvgIcon(<path d={mdiFileCabinet} />, 'FileCabinet');
export const GraphOutline = createSvgIcon(<path d={mdiGraphOutline} />, 'GraphOutline');
export const InformationVariant = createSvgIcon(<path d={mdiInformationVariant} />, 'InformationVariant');