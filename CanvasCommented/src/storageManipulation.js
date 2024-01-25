// Importing the LZString library for compression and decompression
import LZString from "lz-string";

/**
 * Compresses a string using LZString compression.
 *
 * @param {string} s - The string to compress.
 * @return {string} - The compressed string.
 */
export const compress = (s) => LZString.compress(s);

/**
 * Decompresses a string that was compressed using LZString.
 *
 * @param {string} s - The compressed string to decompress.
 * @returns {string} - The decompressed string.
 */
export const deCompress = (s) => LZString.decompress(s);

/**
 * Stores a string in the localStorage after compressing it.
 *
 * @param {string} s - The string to be stored.
 * @param {string} k - The key under which the string will be stored.
 */
export const store = (s, k) => {
  const zip = compress(s); // Compress the string
  localStorage.setItem(k, zip); // Store the compressed string in localStorage
};

/**
 * Retrieves a string from localStorage and decompresses it.
 *
 * @param {string} k - The key of the stored string.
 * @returns {string} - The decompressed string retrieved from localStorage.
 */
export const retrieve = (k) => deCompress(localStorage.getItem(k) || "");
