export interface IDriver {
    click(element: string): Promise<void>;
    close(): Promise<void>;
    get(url: string): Promise<void>;
    getCurrentUrl(): Promise<string>;
    getByText(text: string): Promise<void>;
    input(element: string, value: string): Promise<void>;
    wait(element: string): Promise<void>;
    sleep(ms: number): Promise<void>;
  }
  