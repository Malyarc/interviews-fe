import React, { useState } from "react";
import "./index.css";
import data from "./data.json";

const TreeNode = ({ name, value, path, addInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      addInput(path, inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <li>
      {name}
      <input
        type="text"
        className="inputBox"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <GenerateTree tree={value} path={path} addInput={addInput} />
    </li>
  );
};


const GenerateTree = ({ tree, path, addInput }) => {
  if (!tree) return null;

  return (
    <ul>
      {Object.entries(tree).map(([key, value]) => (
        <TreeNode
          key={[...path, key].join("-")}
          name={key}
          value={value}
          path={[...path, key]}
          addInput={addInput}
        />
      ))}
    </ul>
  );
};


const Tree = () => {
  const [tree, setTree] = useState(data);

  const addChild = (path, childName, currentNode) => {
    const [first, ...rest] = path;
    const newNode = { ...currentNode };

    if (rest.length === 0) {
      newNode[first] = newNode[first] || {};
      newNode[first] = { ...newNode[first], [childName]: null };
    } else {
      newNode[first] = addChild(rest, childName, newNode[first]);
    }

    return newNode;
  };

  const handleAddInput = (path, childName) => {
    setTree((prevTree) => addChild(path, childName, prevTree));
  };

  return (
    <div className="tree">
      <GenerateTree tree={tree} path={[]} addInput={handleAddInput} />
    </div>
  );
};

export default Tree;