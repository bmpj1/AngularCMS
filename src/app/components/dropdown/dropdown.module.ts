export interface DropdownOption {
  label: string;
  value: any;
}

export interface DropdownSettings {
  title: string;
  options: DropdownOption[];
  searchPlaceholder?: string;
}

export interface DropdownOutput {
  option: DropdownOption;
}

export const DefaultDropdownOption: DropdownOption = {
  label: '',
  value: '',
};

export const DefaultDropdownSettings: DropdownSettings = {
  title: 'Desplegar opciones',
  options: [
    { label: 'Opción 1', value: '1' },
    { label: 'Opción 2', value: '2' },
    { label: 'Opción 3', value: '3' },
  ],
  searchPlaceholder: 'Buscar'
};