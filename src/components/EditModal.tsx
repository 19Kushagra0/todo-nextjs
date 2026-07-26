"use client";

import styles from "../styles/todo.module.css";
import { editModalProps } from "@/types/types";
import { useState } from "react";



export default function EditModal({ toggleModal, editTodo }: editModalProps) {
  const [editInput, setEditInput] = useState("");

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalHeader}>Edit Task</h2>
        <form>
          <input
            type="text"
            className={styles.input}
            placeholder="Edit task description..."
            autoFocus
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <div className={styles.modalActions}>
            <button
              onClick={toggleModal}
              type="button"
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                editTodo(editInput)
                toggleModal();
              }}
              type="button"
              className={styles.saveButton}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
