/**
 * Bai 2: State
 * Quản lý dữ liệu động: state lưu trữ những dữ liệu có thể thay đổi trong suốt vòng đời của component. Ví dụ, bạn có thể sử dụng state để lưu trữ trạng thái người dùng, dữ liệu từ server, hoặc trạng thái của một form.

    Chỉ trong component: Mỗi component có thể có state riêng của nó, và dữ liệu trong state chỉ tồn tại trong component đó. Để chia sẻ dữ liệu giữa các component, bạn cần truyền dữ liệu thông qua props.

    Cập nhật lại giao diện: Mỗi khi state thay đổi, React sẽ tự động re-render (vẽ lại) component để hiển thị dữ liệu mới. Điều này giúp đồng bộ giữa dữ liệu và giao diện một cách dễ dàng
 * Bai 3: changeState
    setState: cap nhat lai State
    Bai 4: Form

    Bai 5 Nesting components
      Quan he cha con
 * Bai 6. Truyen data tu cha ve con
      props (viết tắt của "properties") là một cơ chế để truyền dữ liệu từ component cha xuống component con
   Bai 7 key 
   Bai 8 stateless and statefull
   function component dc su dung khi no chi can render du lieu khong quan tam ve sate
 * BAi 9. TRuyen function tu cha sang con.
   Cha truyen props (hàm) xuống cho con xử lý , con nhận hàm và truyền tham số vào hàm, rồi truyền ngược lên cha để xử lý.
   
 */