const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];

const FormComponent = class {
  constructor() {
    this.select = document.querySelector("select[name='status']");
    this.input = document.querySelector("input[name='success']");
    this.form = document.querySelector("form");
    this.output = document.querySelector(".output");
    this.submit = document.querySelector("button[type='submit']");
  }
  start() {
    /**
     * Chargement des données au niveau de mon select
     */
    oppoStatus.forEach((status) => {
      const option = document.createElement("option");
      option.value = status.K_OPPO_STATUS;
      option.textContent = status.STATUS;
      this.select.appendChild(option);
    });
  }
};

const fc = new FormComponent();
fc.start();
