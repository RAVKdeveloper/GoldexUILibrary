import { HTMLAttributes } from 'react';
export interface ImageAvatarTypes extends HTMLAttributes<HTMLDivElement> {
    url: string;
    size?: 'lg' | 'sm' | 'md' | 'es';
    altText: string;
    removeFn?: () => void;
}
