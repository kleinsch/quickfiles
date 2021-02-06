import { Uri, window, workspace } from "vscode";

export async function openFileInEditor(filePath: string) {
  try {
    const fileUri = Uri.file(filePath);
    const document = await workspace.openTextDocument(fileUri);
    await window.showTextDocument(document, { preview: false });
  } catch (error) {
    window.showErrorMessage(`Error opening ${filePath}: ${error.message}`);
  }
}
