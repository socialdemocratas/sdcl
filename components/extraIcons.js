import * as React from 'react';

import {
    mdiFormatQuoteOpen,
    mdiFormatQuoteOpenOutline,
    mdiDotsGrid
} from '@mdi/js';
import { createSvgIcon } from '@mui/material/utils';

export const FormatQuoteOpen = createSvgIcon(<path d={mdiFormatQuoteOpen} />, 'FormatQuoteOpen');
export const FormatQuoteOpenOutline = createSvgIcon(<path d={mdiFormatQuoteOpenOutline} />, 'FormatQuoteOpenOutline');
export const DotsGrid = createSvgIcon(<path d={mdiDotsGrid} />, 'DotsGrid');