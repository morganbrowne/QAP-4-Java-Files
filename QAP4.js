
const MotelCustomer = {
    name: "Jimmy Bean",
    birthDate: new Date(2000, 12, 13),
    gender: "Male",
    hairColor: "Black",
    roomPrefernce: ["Window", "Two Beds", "TV", "Bath Tub", "Safe For Belongings"],
    mailingAddress: {
        porvence: "NL",
        city: "St.John's",
        street: "3 Ridge Place",
        postalCode: "A2E AE4"
    },
    phoneNumber: "(709) 756-1324",
    checkinDate: "2024-03-20",
    checkOutDate: "2024-03-24",

}

// calculate age of the customer
MotelCustomer.prototype.calculateAge = function() {
    const today = new Date();
    const birthDate = new Date(this.birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// calculate duration of stay
MotelCustomer.prototype.calculateDurationOfStay = function() {
    const checkInDate = new Date(this.checkInDate);
    const checkOutDate = new Date(this.checkOutDate);
    const diffTime = Math.abs(checkOutDate - checkInDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Template literal to describe the customer
const customerDescription = `
    Name: ${customer.name}
    Age: ${customer.calculateAge()}
    Gender: ${customer.gender}
    Room Preferences: ${customer.roomPreferences.join(", ")}
    Payment Method: ${customer.paymentMethod}
    Mailing Address: ${customer.mailingAddress.street}, ${customer.mailingAddress.city}, ${customer.mailingAddress.porvence} ${customer.mailingAddress.postalCode}
    Phone Number: ${customer.phoneNumber}
    Check-in Date: ${customer.checkInDate}
    Check-out Date: ${customer.checkOutDate}
    Duration of Stay: ${customer.calculateDurationOfStay()} days
`;