import { join } from "path";
import { Low, JSONFile } from "lowdb";

// Use JSON file for storage
export async function loadDbData() {
  const file = join(__dirname, "utils", "content.json");
  const adapter = new JSONFile(file);
  const db = new Low(adapter);

  // Read data from JSON file, this will set db.data content
  await db.read();

  console.log(db.data);
}
