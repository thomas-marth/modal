import "./App.css";
import { useState } from "react";
import { Button, Modal } from "antd";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Button type="primary" onClick={showModal}>
        Открыть модальное окно
      </Button>
      <Modal
        title="Простое модальное окно"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="OK"
        cancelText="Cancel"
      >
        <p>
          Это простое модальное окно. Вы можете настроить его по своему
          усмотрению.
        </p>
      </Modal>
    </div>
  );
}

export default App;
