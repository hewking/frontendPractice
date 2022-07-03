/**
 * 
 */
function restoreTree(list) {
    let map = {};
    list.forEach(e => map[e.id] = e);
    let root = {};
    list.forEach(e => {
      if (!e.parentId) {
        root = e;
      } else {
        let parent = map[e.parentId]
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(e);
      }
    });
    return root;
}