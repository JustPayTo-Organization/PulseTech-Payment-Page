// Utility function to generate reference numbers
const generateReference = (method: string) => {
  const now = new Date();
  const dateStr = now.toISOString().replace(/[-:.TZ]/g, ''); // YYYYMMDDHHMMSSmmm
  let prefix = '';

  switch (method) {
    // ---CREDIT DEBIT CARDS ---
    case 'credit-card':
      prefix = 'C-';
      break;

    case 'debit-card':
      prefix = 'D-';
      break;

    case 'prepaid-credit-card':
      prefix = 'PC-';
      break;

    // --- BANK TRANSFERS ---
    case 'bpi':
      prefix = 'BPI-';
      break;
    
    case 'ubp':
      prefix = 'UBP-';
      break;

    // --- ONLINE BANKING ---
    case 'bdo':
      prefix = 'BDO-';
      break;

    // case 'bpi':
    //   prefix = 'BPI-';
    //   break;

    case 'landbank':
      prefix = 'LB-';
      break;
    
    case 'metrobank':
      prefix = 'MB-';
      break;
    
    case 'sterling':
      prefix = 'SL-';
      break;
    
    case 'ucbp':
      prefix = 'UCBP-';
      break;

    // --- OVER THE COUNTER ---

    case 'nearest':
      prefix = 'N-';
      break;

    case 'banks':
      prefix = 'B-';
      break;

    case 'remit':
      prefix = 'R-';
      break;
    
    case 'convenience':
      prefix = 'C-';
      break;

    // --- DIGITAL CASH WALLET ---

    case 'gcash':
      prefix = 'GC-';
      break;
    
    case 'maya':
      prefix = 'MY-';
      break;

    // --- QR DISABLED ---
    case 'qr':
      prefix = 'QR-';
      break;

    default:
      prefix = 'PULSE-';
  }

  return `${prefix}PAY-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${dateStr}`;
};

export default generateReference;