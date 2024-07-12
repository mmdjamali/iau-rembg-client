export type Image = {
    file: File;
    base64: string;
} | null;

export type Effect = {
    endpoint: string;
    name: string;
};