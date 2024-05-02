import { Image } from "antd";

const Requirement1 = () => {
  return (
    <div>
      <div style={{ borderBottom: "#ccc 2px solid", marginBottom: "20px" }}>
        <h2>Giới thiệu bản thân</h2>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <Image
            height={170}
            preview
            src="https://th.bing.com/th/id/OIP.HuRW9_7mC2HcNlRsUBQRTgHaHa?rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>
        <div>
          <p>Mã số sinh viên: 2251120143</p>
          <p>Họ và tên: Võ Ngọc Duy</p>
          <p>Liên hệ: 0399517566</p>
          <p>Trường: Đại học Giao thông vận tải TPHCM</p>
          <p>Khoa: Công nghệ thông tin</p>
          <p>Chuyên ngành: Công nghệ phần mềm</p>
        </div>
      </div>
    </div>
  );
};

export default Requirement1;
