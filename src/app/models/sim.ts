export class Sim {
  firstName: string;
  lastName?: string;
  image?: string;
  mom?: string;
  dad?: string;
  lifeForm?: string;
  lifeFormGotFrom?: string;
  status?: string;
  hairColor?: string;
  hairColorGotFrom?: string;
  eyeColor?: string;
  eyeColorGotFrom?: string;
  skinColor?: string;
  skinColorGotFrom?: string;
  noseShapeGotFrom?: string;
  lipShapeGotFrom?: string;
  eyeShapeGotFrom?: string;
  career?: Array<string>;
  children?: Array<string>;
  lifeDescription?: Array<string>


  constructor(firstName: string,
              lastName: string,
              image: string,
              mom: string,
              dad: string,
              lifeForm: string,
              lifeFormGotFrom: string,
              status: string,
              hairColor: string,
              hairColorGotFrom: string,
              eyeColor: string,
              eyeColorGotFrom: string,
              skinColor: string,
              skinColorGotFrom: string,
              noseShapeGotFrom: string,
              lipShapeGotFrom: string,
              eyeShapeGotFrom: string,
              career: Array<string>,
              children: Array<string>,
              lifeDescription: Array<string>) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.image = image;
    this.mom = mom;
    this.dad = dad;
    this.lifeForm = lifeForm;
    this.lifeFormGotFrom = lifeFormGotFrom;
    this.status = status;
    this.hairColor = hairColor;
    this.hairColorGotFrom = hairColorGotFrom;
    this.eyeColor = eyeColor;
    this.eyeColorGotFrom = eyeColorGotFrom;
    this.skinColor = skinColor;
    this.skinColorGotFrom = skinColorGotFrom;
    this.noseShapeGotFrom = noseShapeGotFrom;
    this.lipShapeGotFrom = lipShapeGotFrom;
    this.eyeShapeGotFrom = eyeShapeGotFrom;
    this.career = career;
    this.children = children;
    this.lifeDescription = lifeDescription;
  }
}
