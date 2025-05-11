function fillAllPassengerForms(passengerArray) {
    function setSelectValue(selectEl, value) {
        if (!selectEl || !value) return;
        selectEl.value = value;
        selectEl.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function updateBerthSelect(berthSelectEl, value) {
        if (!berthSelectEl || !value) return;

        berthSelectEl.value = value;
        berthSelectEl.classList.add("ng-dirty", "ng-touched");
        berthSelectEl.dispatchEvent(new Event("input", { bubbles: true }));
        berthSelectEl.dispatchEvent(new Event("change", { bubbles: true }));
    }

    const spanEleToAddPassenger = Array.from(
        document.querySelectorAll("span"),
    ).find((spanEl) => spanEl.textContent === "+ Add Passenger");

    // Add additional passenger forms except the first one
    for (let i = 0; i < passengerArray.length - 1; i++) {
        spanEleToAddPassenger.click();
    }
    // select all the elements
    const nameInputs = document.querySelectorAll(
        'p-autocomplete input[placeholder="Name"]',
    );
    const ageInputs = document.querySelectorAll(
        'input[formcontrolname="passengerAge"]',
    );
    const genderSelects = document.querySelectorAll(
        'select[formcontrolname="passengerGender"]',
    );
    const nationalitySelects = document.querySelectorAll(
        'select[formcontrolname="passengerNationality"]',
    );
    const berthSelects = document.querySelectorAll(
        'select[formcontrolname="passengerBerthChoice"]',
    );
    // const inputFields = [nameInputs, ageInputs, genderSelects, nationalitySelects, berthSelects];

    const foodSelects = document.querySelectorAll('select[formcontrolname="passengerFoodChoice"]');

    passengerArray.forEach((passenger, index) => {
        // change fields only which are provided in the passengers array
        // hence added passenger.field check
        // Object.entries(passenger).forEach(([key,value], i) => {
        //     inputFields[i][index].value = value;
        // })
        if (nameInputs[index] && passenger.name) {
            nameInputs[index].value = passenger.name;
            nameInputs[index].dispatchEvent(new Event("input", { bubbles: true }));
        }

        if (ageInputs[index] && passenger.age) {
            ageInputs[index].value = passenger.age;
            ageInputs[index].dispatchEvent(new Event("input", { bubbles: true }));
        }

        if (genderSelects[index] && passenger.gender) {
            setSelectValue(genderSelects[index], passenger.gender);
        }

        if (nationalitySelects[index] && passenger.nationality) {
            setSelectValue(nationalitySelects[index], passenger.nationality);
        }

        if (berthSelects[index] && passenger.berth) {
            updateBerthSelect(berthSelects[index], passenger.berth);
        }

        if (foodSelects[index] && passenger.foodOption) {
            setSelectValue(foodSelects[index], passenger.foodOption);
        }
    });
}

// foodOption can be V, N, J, F, G, D

const passengers = [
    {
        name: "Person 1",
        age: 50,
        gender: "M",
        berth: "UB",
        foodOption: 'D'
    },
    {
        name: "Person 2",
        age: 50,
        gender: "M",
        foodOption: 'D'
    },
    {
        name: "Person 3",
        age: 50,
        gender: "F",
        foodOption: 'D'
    },
    {
        name: "Person 4",
        age: 50,
        gender: "M",
        foodOption: 'D'
    },
    {
        name: "Person 5",
        age: 50,
        gender: "M",
        berth: "LB",
        foodOption: 'D'
    },
    {
        name: "Person 6",
        age: 50,
        gender: "M",
        berth: "LB",
        foodOption: 'D'
    },
];
fillAllPassengerForms(passengers);
