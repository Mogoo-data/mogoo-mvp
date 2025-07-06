import { v4 as uuidv4 } from 'uuid';
import { HistoryResult, SiteResult, InputData, OutputResult } from '@/types/types';

// Our fake DB arrays
// Use module-scoped variables to persist data across imports (in-memory only)
// Use a global variable to persist data during development (hot reload)
const globalAny = global as any;

if (!globalAny.__historyDb) {
  globalAny.__historyDb = [];
}
if (!globalAny.__siteDb) {
  globalAny.__siteDb = [];
}

const historyDb: HistoryResult[] = globalAny.__historyDb;
const siteDb: SiteResult[] = globalAny.__siteDb;

// Helper to get current timestamp
function getNow(): string {
  return new Date().toISOString();
}

// Create and store a HistoryResult
export function createHistory(inputData: InputData, outputResults: OutputResult[]): HistoryResult {
  const history: HistoryResult = {
    id: uuidv4(),
    created_at: getNow(),
    input_data: inputData,
    output_result: outputResults,
  };

  historyDb.push(history);
  return history;
}

// 2️⃣ Given a HistoryResult, create corresponding SiteResults
export function createSiteResultsFromHistory(history: HistoryResult, outputindex: number): SiteResult {
  const site: SiteResult = {
    id: uuidv4(),
    created_at: getNow(),
    input_data: history.input_data,
    output_result: history.output_result[outputindex],
  };
  siteDb.push(site);
  return site;
}

// Get all HistoryResults
export function getAllHistory(): HistoryResult[] {
  return historyDb;
}

// Get HistoryResult by id
export function getHistoryById(id: string): HistoryResult | undefined {
  console.log(historyDb.length);
  console.log(`Searching for history with id: ${id}`);
  return historyDb.find(h => h.id === id);
}

// Get all SiteResults
export function getAllSites(): SiteResult[] {
  return siteDb;
}

// Get SiteResult by id
export function getSiteById(id: string): SiteResult | undefined {
  return siteDb.find(s => s.id === id);
}
