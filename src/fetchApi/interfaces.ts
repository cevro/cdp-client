export interface Message {
    level: string;
    text: string;
}

export interface FetchResponse<D> {
    data: D;
    messages: Message[];
}
