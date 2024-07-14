import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

import { Libre_Baskerville } from 'next/font/google';

export const libre_bsk = Libre_Baskerville({weight: ['400', '700'],style: ['normal', 'italic'], subsets: ['latin']});
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({weight:'400',style:'normal',subsets:['latin']});