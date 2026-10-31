import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200">
      <div className="bg-[#1D1D1D] text-[#FBF9F4] px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 border border-white/10 text-sm max-w-sm">
        <CheckCircle2 className="w-4 h-4 text-[#86EFAC] shrink-0" />
        <span className="font-medium text-xs sm:text-sm leading-snug">{message}</span>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white p-0.5 rounded transition-colors ml-auto"
          aria-label="닫기"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
