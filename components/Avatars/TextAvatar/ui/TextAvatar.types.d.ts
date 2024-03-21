import type { HTMLAttributes } from 'react';
type BgColorType = 'green' | 'purple' | 'yellow' | 'blue' | 'lightPurple' | 'pink';
export interface TextAvatarType extends HTMLAttributes<HTMLDivElement> {
    bgColor: BgColorType;
    name: string;
    auto?: boolean;
    sizeType?: 'es' | 'sm' | 'md' | 'lg';
}
export {};
