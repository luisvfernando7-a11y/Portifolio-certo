"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { CERTIFICATES, type Certificate } from '@/data/certificates'
import { C, S } from '@/data/theme'

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!selected || !dialog) return
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      triggerRef.current?.focus()
    }
  }, [selected])

  const close = () => setSelected(null)

  return (
    <section id="certificados" style={S.section(C.bg1)} aria-labelledby="certificates-title">
      <div style={S.container}>
        <p style={S.sectionLabel}>QUALIFICAÇÕES</p>
        <h2 id="certificates-title" style={S.h2}>Certificados</h2>
        <p className="mb-8 mt-4 max-w-2xl text-muted">Formação em analytics, dados e serviços AWS. Selecione um certificado para consultar o documento e as competências.</p>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {CERTIFICATES.map(certificate => (
            <li key={certificate.id}>
              <button type="button" aria-haspopup="dialog" aria-label={`Ver certificado: ${certificate.title}`}
                onClick={event => { triggerRef.current = event.currentTarget; setSelected(certificate) }}
                className="certificate-card flex h-full w-full flex-col overflow-hidden rounded-lg border border-line bg-white text-left transition-colors hover:border-black">
                <span className="relative block aspect-[4/3] w-full border-b border-line bg-white">
                  <Image src={certificate.image} alt={`Certificado ${certificate.title}`} fill unoptimized className="object-contain p-3" />
                </span>
                <span className="flex flex-1 flex-col gap-3 p-5">
                  <span className="text-lg font-semibold text-black">{certificate.title}</span>
                  <span className="text-sm text-muted">{certificate.issuer}</span>
                  <time dateTime="2026-09-18" className="text-sm text-muted">{certificate.date}</time>
                  <span className="mt-auto pt-2 font-semibold text-black">Ver certificado <span aria-hidden="true">↗</span></span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <dialog ref={dialogRef} aria-labelledby="certificate-dialog-title" aria-describedby="certificate-dialog-description"
        className="certificate-dialog" onCancel={event => { event.preventDefault(); close() }} onClose={close}
        onClick={event => { if (event.target === event.currentTarget) close() }}>
        {selected && <div className="p-4 sm:p-8">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h3 id="certificate-dialog-title" className="text-xl font-semibold text-black">{selected.title}</h3>
              <p id="certificate-dialog-description" className="mt-2 text-sm text-muted">{selected.issuer} · {selected.date}</p>
            </div>
            <button type="button" autoFocus aria-label="Fechar certificado" onClick={close} className="flex size-11 shrink-0 items-center justify-center rounded-md border border-line bg-white text-black hover:border-black"><X aria-hidden="true" size={20} /></button>
          </div>
          <div className="certificate-document rounded border border-line bg-white p-3">
            <Image src={selected.image} alt={`Certificado ${selected.title}`} unoptimized className="h-auto w-full object-contain" />
          </div>
          <a href={selected.image.src} target="_blank" rel="noopener noreferrer" className="certificate-original mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink">Abrir documento original <span aria-hidden="true">↗</span><span className="sr-only"> (nova aba)</span></a>
          <h4 className="mb-3 mt-6 font-semibold text-ink">Competências relacionadas</h4>
          <ul className="flex flex-wrap gap-2">{selected.skills.map(skill => <li key={skill} className="rounded border border-line bg-surface px-3 py-1 text-sm text-ink">{skill}</li>)}</ul>
        </div>}
      </dialog>
    </section>
  )
}
