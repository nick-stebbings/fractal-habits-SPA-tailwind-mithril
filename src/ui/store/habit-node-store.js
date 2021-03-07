const basePath = "/habit_trees/nodes";

export default NodeStore = (function (axios) {
  return {
    get_tree: () => axios.get("/habit_trees"),
    get_all: () => axios.get(basePath),
    show_one_node: (id) => axios.get(`${basePath}/${id}`),
    create_node: (parent_node) =>
      axios.post(basePath, { parent_id: parent_node }),
    delete_node: (id) => axios.delete(`${basePath}/${id}`),

    put_node: (id) => axios.put(`${basePath}/${id}`),
    patch_node: (id, update) => axios.patch(`${basePath}/${id}`, update),
  };
})();
