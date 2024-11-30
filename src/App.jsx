import React, { useState } from "react";

const App = () => {
  const [shapeNumber, setShapeNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [color, setColor] = useState("");
  const [email, setEmail] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const getShapeName = () => {
    switch (shapeNumber) {
      case "3":
        return "Uchburchak";
      case "4":
        return "To'rtburchak";
      case "5":
        return "Beshburchak";
      default:
        return "Bunday shakl mavjud emas";
    }
  };

  const isValidEmail = (email) => email.includes("@") && email.includes(".com");

  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const swapValues = () => {
    setInput1(input2);
    setInput2(input1);
  };

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      {/* 1. Shaklni aniqlash */}
      <div className="section">
        <h3>Shaklni aniqlash</h3>
        <input
          type="number"
          placeholder="Shakl raqamini kiriting"
          value={shapeNumber}
          onChange={(e) => setShapeNumber(e.target.value)}
        />
        <p>{getShapeName()}</p>
      </div>

      {/* 2. Parol tekshirish */}
      <div className="section">
        <h3>Parol tekshirish</h3>
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parolni tasdiqlash"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p>
          {password && confirmPassword
            ? password === confirmPassword
              ? "Parol mos keldi"
              : "Parol mos kelmadi"
            : ""}
        </p>
      </div>

      {/* 3. Checkbox bilan ro'yxat tuzish */}
      <div className="section">
        <h3>Checkbox bilan ro'yxat tuzish</h3>
        {["Olma", "Banan", "Apelsin"].map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              onChange={() => toggleItem(item)}
              checked={selectedItems.includes(item)}
            />
            {item}
          </label>
        ))}
        <p>Tanlanganlar: {selectedItems.join(", ")}</p>
      </div>

      {/* 4. Rang o'zgartirish */}
      <div className="section">
        <h3>Rang o'zgartirish</h3>
        {["Qizil", "Yashil", "Ko'k"].map((v) => (
          <label key={v}>
            <input
              type="radio"
              name="color"
              value={v}
              onChange={(e) => setColor(e.target.value)}
            />
            {v}
          </label>
        ))}
        <div
          className="color-box"
          style={{
            backgroundColor:
              color === "Qizil"
                ? "red"
                : color === "Yashil"
                ? "green"
                : color === "Ko'k"
                ? "blue"
                : "transparent",
          }}
        ></div>
      </div>

      {/* 5. Email tekshirish */}
      <div className="section">
        <h3>Email tekshirish</h3>
        <input
          type="email"
          placeholder="Emailni kiriting"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>
          {email
            ? isValidEmail(email)
              ? "Email to'g'ri"
              : "Email noto'g'ri formatda"
            : ""}
        </p>
      </div>

      {/* 6. Input qiymatlarini almashtirish */}
      <div className="section">
        <h3>Input qiymatlarini almashtirish</h3>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button onClick={swapValues}>Qiymatlarni almashtirish</button>
      </div>

      {/* 7. To-do ro'yxat */}
      <div className="section">
        <h3>To-do ro'yxat</h3>
        <input
          type="text"
          placeholder="Vazifani kiriting"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Qo'shish</button>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              {t} <button onClick={() => deleteTask(index)}>O'chirish</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
