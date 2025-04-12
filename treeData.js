export const treeData = {
  name: "Root",
  description: "The common ancestor of all these groups.",
  traits: [],
  children: [
    { name: "Ext.", description: "An extinct lineage.", traits: [], children: [] },
    {
      name: "Group W",
      description: "A major evolutionary branch.",
      traits: [{ name: "Multicellularity", position: 0.3 }],
      children: [
        { name: "Chara and Nitella", description: "Charophyte algae relatives.", traits: [], children: [] },
        {
          name: "Group W",
          description: "Another branch within Group W.",
          traits: [{ name: "Cellulose Walls", position: 0.4 }],
          children: [
            { name: "Choleochaete", description: "Another charophyte algae.", traits: [], children: [] },
            {
              name: "Group W",
              description: "A key divergence.",
              traits: [{ name: "Plasmodesmata", position: 0.5 }],
              children: [
                { name: "Zygnemetales", description: "A group of green algae.", traits: [], children: [] },
                {
                  name: "Group for Land Plants",
                  description: "This branch leads to land plants.",
                  traits: [{ name: "Cuticle", position: 0.5 }],
                  children: [
                    { name: "Gymnosperms", description: "Non-flowering seed plants.", traits: [], children: [] },
                    { name: "Angiosperms", description: "Flowering plants.", traits: [], children: [] }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};