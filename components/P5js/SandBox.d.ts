/// <reference types="react" />
interface SandBoxProps {
    running: boolean;
    result: string;
    cellSize?: number;
    colorPair?: string[];
}
declare const SandBox: ({ running, result, cellSize, colorPair }: SandBoxProps) => JSX.Element;
export default SandBox;
