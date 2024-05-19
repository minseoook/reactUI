import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const obj = [
  { id: "1", name: "성민석1" },
  { id: "2", name: "성민석2" },
  { id: "3", name: "성민석3" },
];

const App = () => {
  const [items, setItems] = useState(obj);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const its = Array.from(items);
    const [reorderItem] = its.splice(result.source.index, 1);
    its.splice(result.destination.index, 0, reorderItem);
    console.log(its);
    setItems(its);
  };
  return (
    <div className="app">
      <header className="app-header">
        <h1>드래그 앤 드랍 앱</h1>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="items"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <li
                        className="item"
                        key={item.id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.name}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
};

export default App;
