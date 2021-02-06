import { workspace } from "vscode";

export function substituteVariables(filePath: string): string {
  const currentWorkspace = workspace.workspaceFolders
    ? workspace.workspaceFolders.length
      ? workspace.workspaceFolders[0]
      : null
    : null;
  const currentWorkspacePath = currentWorkspace?.uri.fsPath;

  filePath = currentWorkspacePath
    ? filePath.replace(/\${workspaceFolder}/g, currentWorkspacePath)
    : filePath;

  return filePath;
}
