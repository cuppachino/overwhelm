import { Page } from '@/components/common/Page';

// import { useNodeStore } from '@/packages/iso';

export default function Drafting() {
  // const nodes = useNodeStore((state) => state.nodes);
  // const updateNode = useNodeStore((state) => state.updateNode);

  return (
    <Page title='Drafting' subtitle='drafting'>
      <div className='grid grid-flow-col h-full grid-cols-2'>
        <div className='flex col items-start justify-center p-8'>
          {/* <Controller /> */}
        </div>
        <div className='bg-mono-2 flex flex-wrap-reverse gap-2.5 place-content-start'>
          {/* {nodes.map((node, index) => {
            return (
              <div
                key={node.id}
                className='flex flex-col min-w-[128px] flex-1 aspect-square bg-mono-6 text-mono-1 text-xs font-mp-code items-center justify-evenly'>
                <span>
                  [{node.x}, {node.y}]
                </span>
                <button
                  className='bg-blue-600 text-xs p-2'
                  onClick={() =>
                    updateNode(node.id, {
                      x: node.x + 1,
                      y: node.y + 1,
                    })
                  }>
                  update
                </button>
              </div>
            );
          })} */}
        </div>
      </div>
    </Page>
  );
}
// import { Button } from '@/components/common/Button';
// function Controller() {
//   const { nodes, createNode, updateNode } = useNodeStore();

//   return (
//     <div className='bg-mono-6 rounded-xl p-4 text-mono-0 flex flex-col items-center justify-center gap-2 box-border'>
//       <h4>controller</h4>
//       <Button label='create' onClick={createNode} />
//     </div>
//   );
// }
