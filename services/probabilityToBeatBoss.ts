import * as fs from 'fs';
import type { PlayerResult } from '../types/types.js';


export function parseCSV(path:string):PlayerResult[] {
    const text = fs.readFileSync(path,"utf-8");
    const lines = text.trim().split("\n");
    lines.shift(); //remove the header line contain the titles

    return lines.map(line =>{
        const [suit, animal, fruit, win] = line. split(',');
        return {suit,animal,fruit,win:win === 'True' ? 1: 0};
    });
}

export function calculateProbabilities(data: PlayerResult[]){}

export function probabilityToBeatBoss(...args:string[]): number{
    console.log(args);
    return 62.4;
}