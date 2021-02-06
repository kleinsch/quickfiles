import { ExtensionContext } from "vscode";
import { openFile, openKeywordFile } from "./commands";

export async function activate(context: ExtensionContext) {
  context.subscriptions.push(openFile());
  context.subscriptions.push(openKeywordFile());
}
