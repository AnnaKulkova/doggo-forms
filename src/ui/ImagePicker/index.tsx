import React, {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import './styles.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  containerClassName?: string;
  photo?: File;
  onFilePick?(photo: File): void;
}

const fr = new FileReader();

const FilePicker: FC<Props> = ({
  title,
  containerClassName,
  photo,
  onChange,
  onFilePick,
}) => {
  const [file, setFile] = useState<File>();
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    fr.onload = function () {
      if (imgRef.current) {
        imgRef.current.src = fr.result as string;
      }
    };
  }, [imgRef]);
  const handleFileSelect: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const file = e.target.files?.[0];
      if (file) {
        fr.readAsDataURL(file);
        setFile(file);
        onFilePick?.(file);
      }
      onChange?.(e);
    },
    [onChange, onFilePick]
  );
  return (
    <>
      <input
        type="file"
        className="hidden"
        id="file-picker"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileSelect}
      />
      <label htmlFor="file-picker" className={containerClassName ?? ''}>
        <span className={'input-label'}>{title}</span>
        <div className="image-picker_image-wrapper">
          <img
            ref={imgRef}
            className={`image-picker_placeholder ${
              !(photo || file) ? 'image-picker_placeholder__opacity' : ''
            }`}
            src={require('assets/doggo_placeholder.png')}
            alt="avatar"
            width={120}
            height={140}
          />
          {!(photo || file) && <span className="image-picker_plus">+</span>}
        </div>
      </label>
    </>
  );
};

export default FilePicker;
