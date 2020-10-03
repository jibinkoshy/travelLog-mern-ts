export const API_URL: string = 'http://localhost:1337';

export async function listLogEntries(): Promise<logEntries[]> {
  const response = await fetch(`${API_URL}/api/logs`);
  const json = await response.json();
  return json;
}
