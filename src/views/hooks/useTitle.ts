import { useEffect } from 'react';

function useTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Blockchain Solutions`;
  }, [title]);
}

export default useTitle;
