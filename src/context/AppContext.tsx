'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Material, materialsData } from '../data/materialsData';
import { Language } from '../data/translations';

interface AppContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  compareList: Material[];
  addToCompare: (material: Material) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<Material[]>([]);

  // Load state on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('material_lang');
    if (savedLang) setLangState(savedLang as Language);

    const savedBookmarks = localStorage.getItem('material_bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('material_lang', newLang);
  };

  const toggleBookmark = (id: string) => {
    let updated;
    if (bookmarks.includes(id)) {
      updated = bookmarks.filter((b) => b !== id);
    } else {
      updated = [...bookmarks, id];
    }
    setBookmarks(updated);
    localStorage.setItem('material_bookmarks', JSON.stringify(updated));
  };

  const addToCompare = (mat: Material) => {
    if (compareList.some((m) => m.id === mat.id)) return;
    if (compareList.length >= 3) {
      alert("You can compare up to 3 materials.");
      return;
    }
    setCompareList([...compareList, mat]);
  };

  const removeFromCompare = (id: string) => {
    setCompareList(compareList.filter((m) => m.id !== id));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        bookmarks,
        toggleBookmark,
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
