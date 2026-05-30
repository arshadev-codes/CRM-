/**
 * useTechnicalPage.js
 *
 * Convenience hook — each editable page imports this instead of
 * wiring up the full store directly. Keeps pages lean.
 *
 * Usage in Page13.jsx:
 *   const { data, actions } = useTechnicalPage("page13");
 */

import { useProposalStore } from "../store/proposalStore";

export function useTechnicalPage(pageKey) {
  const data = useProposalStore((s) => s.technicalPages[pageKey]);
  const meta = useProposalStore((s) => s.meta);

  const {
    updateTechnicalPage,
    updateTechnicalSection,
    setTechnicalSectionImage,
    updateTechnicalSectionImageCaption,
    addTechnicalSection,
    removeTechnicalSection,
    updateTechnicalBullet,
    addTechnicalBullet,
    removeTechnicalBullet,
    // page 12
    setTechnicalPage12SldPdf,
    setTechnicalPage12LayoutImage,
    // page 13
    updatePage13Title,
    updatePage13Connection,
    setPage13ConnectionImage,
    updatePage13Test,
    addPage13Test,
    removePage13Test,
    addPage13Connection,
    removePage13Connection,
    updatePage13FooterNote,
  } = useProposalStore.getState();

  return {
    data,
    meta,
    actions: {
      // Generic
      updatePage: (patch) => updateTechnicalPage(pageKey, patch),
      updateSection: (idx, patch) => updateTechnicalSection(pageKey, idx, patch),
      setImage: (sectionIdx, imgIdx, file) =>
        setTechnicalSectionImage(pageKey, sectionIdx, imgIdx, file),
      updateCaption: (sectionIdx, imgIdx, caption) =>
        updateTechnicalSectionImageCaption(pageKey, sectionIdx, imgIdx, caption),
      addSection: (template) => addTechnicalSection(pageKey, template),
      removeSection: (idx) => removeTechnicalSection(pageKey, idx),
      updateBullet: (sectionIdx, bulletIdx, patch) =>
        updateTechnicalBullet(pageKey, sectionIdx, bulletIdx, patch),
      addBullet: (sectionIdx) => addTechnicalBullet(pageKey, sectionIdx),
      removeBullet: (sectionIdx, bulletIdx) =>
        removeTechnicalBullet(pageKey, sectionIdx, bulletIdx),
      // Page 12 specific
      setSldPdf: setTechnicalPage12SldPdf,
      setLayoutImage: setTechnicalPage12LayoutImage,
      // Page 13 specific
      updateTitle: updatePage13Title,
      updateConnection: updatePage13Connection,
      setConnectionImage: setPage13ConnectionImage,
      updateTest: updatePage13Test,
      addTest: addPage13Test,
      removeTest: removePage13Test,
      addConnection: addPage13Connection,
      removeConnection: removePage13Connection,
      updateFooterNote: updatePage13FooterNote,
    },
  };
}