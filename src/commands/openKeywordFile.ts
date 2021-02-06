import { commands, window, workspace } from "vscode";
import { openFileInEditor } from "../utils/openFileInEditor";
import { substituteVariables } from "../utils/variables";

export function openKeywordFile() {
  return commands.registerCommand(
    "quickfiles.openKeywordFile",
    async (keyword: string) => {
      if (!keyword) {
        const dialogKeyword = await window.showInputBox({
          prompt: `Keyword file to open?`,
          value: "",
        });

        if (dialogKeyword) {
          keyword = dialogKeyword;
        } else {
          window.showErrorMessage("No keyword file to open");
          return;
        }
      }

      const keywords = workspace
        .getConfiguration("quickfiles")
        .get("keywordFiles") as any[];

      const foundObj = keywords.find((k) => {
        return k.keyword === keyword;
      });

      if (foundObj === undefined) {
        window.showErrorMessage(`Keyword not found in config: ${keyword}`);
        return;
      }

      openFileInEditor(substituteVariables(foundObj.file));
    }
  );
}
