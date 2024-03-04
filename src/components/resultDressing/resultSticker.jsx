import StickerSvg from '../../assets/resultJpg/stickerSvg';

const ResultSticker = ({ content, color }) => {
  return (
    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center animate-spin-slow">
      <StickerSvg color={color} className="w-full h-full" />
      <img src={content} alt="Content" className="absolute inset-0 m-auto" style={{ transform: 'rotate(45deg)' }} />
    </div>
  );
};

export default ResultSticker;
