export interface IDriver {
  click(element: string): Promise<void>;
  arrowUp(): Promise<void>;
  enter(): Promise<void>;
  close(): Promise<void>;
  get(url: string): Promise<void>;
  refresh(): Promise<void>;
  getCurrentUrl(): Promise<string>;
  getByText(element: string, text: string): Promise<void>;
  input(element: string, value: string): Promise<void>;
  wait(element: string): Promise<void>;
  sleep(ms: number): Promise<void>;
  waitText(text: string): Promise<void>;
}
