import fileExtensions from "./shared/fileExtensions";
import fileNames from "./shared/fileNames";
import folderNames from "./shared/folderNames";
import folderNamesExpanded from "./shared/folderNamesExpanded";
import languageIds from "./shared/languageIds";

export default {
  light: {
    file: "_file_light",
    folder: "_folder_light",
    folderExpanded: "_folder_light_open",
    rootFolder: "_root_folder_light",
    rootFolderExpanded: "_root_folder_light_open",
    folderNames,
    folderNamesExpanded,
    fileExtensions,
    fileNames: {
      ...fileNames,
      ...{ ".editorconfig": "_f_light_editorconfig" },
    },
    languageIds,
  },
};
