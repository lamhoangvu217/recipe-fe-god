export function urlParseParams(objectParse: { [key: string]: string }) {
  const str = [];
  for (const p in objectParse)
    if (objectParse.hasOwnProperty(p)) {
      if (objectParse[p]) {
        str.push(
          encodeURIComponent(p) + "=" + encodeURIComponent(objectParse[p])
        );
      }
    }
  return str.join("&");
}
