{method === 'bank' && (
                    <div className="p-2 rounded space-y-2">
                    <p className="text-[10px] font-bold text-[#6F7282] ">What bank will you use?</p>
                    {BANKS.map((bank) => (
                        <label key={bank.id} className="flex text-[#312B5B] items-center gap-3 p-1.5 cursor-pointer rounded hover:bg-white group transition-colors">
                        <input 
                            type="radio" 
                            checked={selectedBank === bank.id}
                            onChange={() => setSelectedBank(bank.id)}
                            className="accent-[#312B5B] scale-75" 
                        />
                        <img src={bank.logo} alt="" className="w-5 h-5 rounded" />
                        <div>
                            <p className="text-xs font-bold leading-none">{bank.name}</p>
                            <p className="text-[9px] text-[#312B5B] leading-tight">{bank.description}</p>
                        </div>
                        </label>
                    ))}
                    </div>
                )}
                
                {method === 'card' && (
                    <div className="rounded space-y-2">
                        <p className="text-[10px] font-bold text-[#6F7282]">How would you like to send money?</p>
                        {CARDS.map((card) => {
                            const isSelected = selectedCard === card.id;
                            const Icon = card.logo; 
                        return (
                            <div 
                            key={card.id} 
                            className={`text-xs rounded-md transition-all border border-[#312B5B] w-[95%] mx-auto ${
                                isSelected ? 'border-[#312B5B] bg-[#F7F8FA]' : 'border-transparent'
                            }`}
                            >
                            {/* Card Header/Trigger */}
                            <label className="text-xs flex items-center gap-4 p-2 cursor-pointer">
                                <input
                                type="radio"
                                name="paymentMethod"
                                checked={isSelected}
                                onChange={() => setSelectedCard(card.id)}
                                className=" mt-1.5 w-4 h-4 accent-[#312B5B]"
                                />
                                <Icon className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
                                <div className="flex flex-col">
                                <span className="text-[12px] font-bold text-[#1a1a1a]">{card.name}</span>
                                <span className="text-[10px] text-black">{card.description}</span>
                                </div>
                            </label>

                            {/* Expandable Form Content */}
                            {isSelected && (
                                <div className="px-12 pb-4 pt-2 border-t border-[#312B5B]">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-[10px] font-bold text-[#1a1a1a]">
                                    {card.id === "credit-card" ? "Credit Card " 
                                    : card.id === "debit-card" ? "Debit Card "
                                    : card.id === "prepaid-credit-card" ? "Prepaid Credit Card " : ""  }
                                    Information <span className="text-red-500">*</span>
                                    </h3>
                                    <div className="flex gap-2">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-6 gap-y-6 gap-x-4">
                                    {/* Full Name */}
                                    <div className="col-span-6">
                                    <label className="block text-[10px] text-black mb-1">Card Holder's Full Name</label>
                                    <input 
                                        type="text"
                                        value={card.id === "credit-card" ? creditCardName 
                                            : card.id === "debit-card" ? debitCardName
                                            : card.id === "prepaid-credit-card" ? prepaidCardName :
                                            ""
                                        } 
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            switch (card.id) {
                                                case "credit-card":
                                                    setCreditCardName(value);
                                                    break;
                                                case "debit-card":
                                                    setDebitCardName(value);
                                                    break;
                                                case "prepaid-credit-card":
                                                    setPrepaidCardName(value);
                                                    break;
                                                default:
                                                    break; 
                                            }
                                        }}
                                        placeholder="Ann Cruz" 
                                        className="w-full bg-transparent border-b border-[#6F7282] py-1 focus:border-[#312B5B] outline-none text-[12px] font-semibold text-black"
                                    />
                                    </div>

                                    {/* Card Number */}
                                    <div className="col-span-3">
                                    <label className="block text-[10px] text-black mb-1">Card Number</label>
                                    <input 
                                        type="text"
                                        value={card.id === "credit-card" ? creditCardNumber 
                                            : card.id === "debit-card" ? debitCardNumber
                                            : card.id === "prepaid-credit-card" ? prepaidCardNumber :
                                            ""
                                        }  
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            switch (card.id) {
                                                case "credit-card":
                                                    setCreditCardNumber(value);
                                                    break;
                                                case "debit-card":
                                                    setDebitCardNumber(value);
                                                    break;
                                                case "prepaid-credit-card":
                                                    setPrepaidCardNumber(value);
                                                    break;
                                                default:
                                                    break; 
                                            }
                                        }}
                                        placeholder="4123 4567 8900 0123" 
                                        className="w-full bg-transparent border-b border-[#6F7282] py-1 focus:border-[#312B5B] outline-none text-[12px] font-semibold text-black"
                                    />
                                    </div>

                                    {/* Expiration */}
                                    <div className="col-span-2">
                                    <label className="block text-[10px] text-black mb-1">Expiration Date</label>
                                    <input 
                                        type="text" 
                                        placeholder="MM / YY" 
                                        value={card.id === "credit-card" ? creditCardExpire 
                                            : card.id === "debit-card" ? debitCardExpire
                                            : card.id === "prepaid-credit-card" ? prepaidCardExpire :
                                            ""
                                        }   
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            switch (card.id) {
                                                case "credit-card":
                                                    setCreditCardExpire(value);
                                                    break;
                                                case "debit-card":
                                                    setDebitCardExpire(value);
                                                    break;
                                                case "prepaid-credit-card":
                                                    setPrepaidCardExpire(value);
                                                    break;
                                                default:
                                                    break; 
                                            }
                                        }}
                                        className="w-full bg-transparent border-b border-[#6F7282] py-1 focus:border-[#312B5B] outline-none text-[12px] font-semibold text-black"
                                    />
                                    </div>

                                    {/* CCV */}
                                    <div className="col-span-1">
                                    <label className="block text-[10px] text-black mb-1">CCV</label>
                                    <input 
                                        type="text" 
                                        value={card.id === "credit-card" ? creditCardCVV 
                                            : card.id === "debit-card" ? debitCardCVV
                                            : card.id === "prepaid-credit-card" ? prepaidCardCVV :
                                            ""
                                        }
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            switch (card.id) {
                                                case "credit-card":
                                                    setCreditCardCVV(value);
                                                    break;
                                                case "debit-card":
                                                    setDebitCardCVV(value);
                                                    break;
                                                case "prepaid-credit-card":
                                                    setPrepaidCardCVV(value);
                                                    break;
                                                default:
                                                    break; 
                                            }
                                        }}
                                        placeholder="3 Digits" 
                                        className="w-full bg-transparent border-b border-[#6F7282] py-1 focus:border-[#312B5B] outline-none text-[12px] font-semibold text-black"
                                    />
                                    </div>

                                    {/* Security Disclaimer */}
                                    <div className="col-span-6">
                                    <p className="text-[10px] text-[#6F7282] text-center leading-relaxed">
                                        Make sure your browser displays Pulse Tech. Be careful with your card details <br />
                                        when using a publicly available computer, or using public WIFI.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            )}
                            </div>
                        );
                        })}
                    </div>
                )}

                { method === 'online' && (
                    <div >
                    <div className='flex gap-2 mb-3 w-[70%] mx-auto'>
                            {/* Desktop Option */}
                            <label className="relative flex-1 cursor-pointer">
                            <input
                                type="radio"
                                name="device-type"
                                value="desktop"
                                className="sr-only" 
                                checked={onlineSelectedDevice === 'desktop'}
                                onChange={(e) => setOnlineSelectedDevice(e.target.value)}
                            />
                            <div className={`
                                flex items-center justify-center gap-3 py-3 px-4 rounded-md transition-all duration-200
                                ${onlineSelectedDevice === 'desktop' 
                                ? 'bg-[#312B5B] text-white shadow-md' 
                                : 'text-[#6F7282] hover:bg-gray-200'}
                            `}>
                                <Monitor size={20} strokeWidth={onlineSelectedDevice === 'desktop' ? 2.5 : 1.5} />
                                <div className="flex flex-col items-start">
                                <span className="text-sm font-bold leading-none">Desktop</span>
                                <span className={`text-[10px] ${onlineSelectedDevice === 'desktop' ? 'text-gray-300' : 'text-[#6F7282]'}`}>
                                    Bank's web portal
                                </span>
                                </div>
                            </div>
                            </label>

                            {/* Mobile Option */}
                            <label className="relative flex-1 cursor-pointer">
                            <input
                                type="radio"
                                name="device-type"
                                value="mobile"
                                className="sr-only"
                                checked={onlineSelectedDevice === 'mobile'}
                                onChange={(e) => setOnlineSelectedDevice(e.target.value)}
                            />
                            <div className={`
                                flex items-center justify-center gap-3 py-3 px-4 rounded-md transition-all duration-200
                                ${onlineSelectedDevice === 'mobile' 
                                ? 'bg-[#312B5B] text-white shadow-md' 
                                : 'text-[#6F7282] hover:bg-gray-200'}
                            `}>
                                <Smartphone size={20} strokeWidth={onlineSelectedDevice === 'mobile' ? 2.5 : 1.5} />
                                <div className="flex flex-col items-start">
                                <span className="text-sm font-bold leading-none">Mobile</span>
                                <span className={`text-[10px] ${onlineSelectedDevice === 'mobile' ? 'text-gray-300' : 'text-[#6F7282]'}`}>
                                    Bank's mobile app
                                </span>
                                </div>
                            </div>
                            </label>
                        </div>
                        {ONLINE_METHODS.map((bank) => {
                            const isSelected = selectedOnline === bank.id;
                            
                            return (
                                
                                <div
                                key={bank.id}
                                className={`rounded-md text-xs transition-all duration-300 w-full lg:w-[98%] mx-auto overflow-hidden ${
                                    isSelected 
                                    ? 'border-[#312B5B] bg-[#F7F8FA] shadow-sm' 
                                    : 'border-transparent hover:bg-gray-50'
                                }`}
                                >
                                
                                

                                {/* Card Header */}
                                <label className="flex items-center gap-4 p-3 cursor-pointer">
                                    <div className="shrink-0">
                                    <input
                                        type="radio"
                                        name="onlineMethod"
                                        checked={isSelected}
                                        onChange={() => setSelectedOnline(bank.id)}
                                        className="w-4 h-4 accent-[#312B5B] cursor-pointer"
                                    />
                                    </div>

                                    {/* Bank Logo Placeholder */}
                                    <div className="w-10 h-10 rounded flex items-center justify-center shrink-0 overflow-hidden">
                                    <div className="text-[10px] font-bold">
                                        <img src={bank.logo} alt={bank.name} className="w-full h-full object-contain" />
                                    </div>
                                    </div>

                                    <div className="flex flex-col leading-tight">
                                    <span className="text-sm font-bold text-[#1a1a1a]">
                                        {bank.name}
                                    </span>
                                    <span className="text-[11px] text-[#1a1a1a] mt-0.5">
                                        {bank.description}
                                    </span>
                                    {bank.fee && (
                                        <span className="text-[11px] text-[#1a1a1a]">
                                        {bank.fee}
                                        </span>
                                    )}
                                    </div>
                                </label>

                                {/* Expandable Panel - Matching KYC style from image_cc4eae.png */}
                               
                                </div>
                            );
                        })}
                    </div>
                )}

                { method === 'otc' && (
                    <>
                        <div>
                            
                        </div>
                    </>
                )}