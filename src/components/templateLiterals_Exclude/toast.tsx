/*
    Mong muốn position nhận những giá trị sau:
        'Trai-Tren' | 'Trai-Giua'   | 'Trai-Duoi' |
        'Giua-Tren' |   'Giua'      | 'Giua-Duoi' |
        'Phai-Tren' | 'Phai-Giua'   | 'Phai-Duoi'
*/

type HorizontalPosition = 'Trai' | 'Giua' | 'Phai';
type VerticalPosition = 'Tren' | 'Giua' | 'Duoi';
type ToastProps = {
    // // Khuôn mẫu để nhận props
    // position: `${HorizontalPosition}-${VerticalPosition}`

    // Exclude< giá trị cho phép, giá trị loại bỏ > | giá trị thay thế giá trị loại bỏ
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'Giua-Giua'> | 'Giua'
};

export const Toast = ({ position }: ToastProps) => {
    return <div>Position: {position}</div>
};