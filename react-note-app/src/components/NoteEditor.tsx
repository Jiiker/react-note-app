import ReactQuill from "react-quill";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function NoteEditor({ value, setValue }: Props) {
  const myColors = [
    "purple",
    "red",
    "blue",
    "green",
    "yellow",
    "black",
    "white",
    "#cce0ff",
    "#ffcccc",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: myColors }],
      [{ background: myColors }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
  ];

  return (
    <div>
      <ReactQuill
        theme='snow'
        modules={modules}
        formats={formats}
        value={value}
        onChange={(e) => setValue(e.valueOf())}
      />
    </div>
  );
}

export default NoteEditor;
