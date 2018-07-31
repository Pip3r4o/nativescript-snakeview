import { View, Property } from "tns-core-modules/ui/core/view";

export const minProperty = new Property<SnakeViewBase, number>({ name: 'min', defaultValue: 0, });

export const maxProperty = new Property<SnakeViewBase, number>({ name: 'max', defaultValue: 0, });

export const valuesProperty = new Property<SnakeViewBase, Array<string>>({ name: 'values', defaultValue: [], affectsLayout: true });

export abstract class SnakeViewBase extends View {
    min: number;
    max: number;
    values: any[];
}

minProperty.register(SnakeViewBase);
maxProperty.register(SnakeViewBase);
valuesProperty.register(SnakeViewBase);
