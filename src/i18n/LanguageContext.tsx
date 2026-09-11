import { createContext, useMemo, useState, type ReactNode } from 'react'
import { content, type Content, type Lang } from './translations'

export interface LanguageContextValue {
  lang: Lang
  t: Content
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: content[lang], setLang }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
