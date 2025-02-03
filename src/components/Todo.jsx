import React, { useState } from "react";

function Todo({ todo, removeTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false); // Input alanının görünürlüğünü kontrol eder
  const [editedText, setEditedText] = useState(todo.content); // Input alanındaki metni tutar

  // Edit butonuna tıklandığında çalışacak fonksiyon
  const handleEditClick = () => {
    setIsEditing(true); // Input alanını görünür yap
  };

  // Input alanındaki değişiklikleri takip eder
  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  // Complete butonuna tıklandığında çalışacak fonksiyon
  const handleCompleteClick = () => {
    updateTodo(todo.id, editedText); // Todo'yu güncelle
    setIsEditing(false); // Input alanını gizle
  };

  return (
    <div className="todo">
      {/* Input alanı veya todo içeriği */}
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          className="edit-input"
        />
      ) : (
        <div>{todo.content}</div>
      )}

      {/* Butonlar */}
      <div className="todo-actions">
        {/* Delete butonu */}
        <button onClick={() => removeTodo(todo.id)} className="delete-btn">
          <i className="fas fa-trash-alt"></i>
        </button>

        {/* Edit butonu: Sadece input alanı gizliyken göster */}
        {!isEditing && (
          <button onClick={handleEditClick} className="edit-btn">
            <i className="fas fa-edit"></i>
          </button>
        )}

        {/* Complete butonu: Sadece input alanı görünürken göster */}
        {isEditing && (
          <button onClick={handleCompleteClick} className="complete-btn">
            <i className="fas fa-check"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo;