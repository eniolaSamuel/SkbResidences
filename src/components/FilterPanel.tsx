import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { FilterOptions } from '@/types/apartment';
import { locations } from '@/data/apartments';

interface FilterPanelProps {
    filters: FilterOptions;
    onFiltersChange: (filters: FilterOptions) => void;
    isOpen: boolean;
    onToggle: () => void;
}

export const FilterPanel = ({ filters, onFiltersChange, isOpen, onToggle }: FilterPanelProps) => {
    const apartmentTypes = [
        'Mini Flat',
        'Standard Studio',
        'Executive Studio',
        '1 Bedroom',
        'Executive 1 Bedroom',
        '2 Bedroom',
        'Executive 2 Bedroom',
        '3 Bedroom'
    ];

    const handlePriceRangeChange = (values: number[]) => {
        onFiltersChange({
            ...filters,
            priceRange: [values[0], values[1]]
        });
    };

    const resetFilters = () => {
        onFiltersChange({
            zone: 'all',
            apartmentType: 'all',
            purpose: 'all',
            location: 'all',
            priceRange: [0, 200000]
        });
    };

    return (
        <>
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
                <Button
                    onClick={onToggle}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                >
                    <Filter className="w-4 h-4" />
                    {isOpen ? 'Hide Filters' : 'Show Filters'}
                </Button>
            </div>

            {/* Filter Panel */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Filters</CardTitle>
                        <div className="flex items-center gap-2">
                            <Button
                                onClick={resetFilters}
                                variant="ghost"
                                size="sm"
                                className="text-sm"
                            >
                                Reset
                            </Button>
                            <Button
                                onClick={onToggle}
                                variant="ghost"
                                size="sm"
                                className="lg:hidden"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Zone Filter */}
                        <div>
                            <label className="text-sm font-medium mb-2 block">Zone</label>
                            <Select
                                value={filters.zone}
                                onValueChange={(value) => onFiltersChange({ ...filters, zone: value as FilterOptions['zone'] })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select zone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Zones</SelectItem>
                                    <SelectItem value="Mainland">Mainland</SelectItem>
                                    <SelectItem value="Island">Island</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Apartment Type Filter */}
                        <div>
                            <label className="text-sm font-medium mb-2 block">Apartment Type</label>
                            <Select
                                value={filters.apartmentType}
                                onValueChange={(value) => onFiltersChange({ ...filters, apartmentType: value as FilterOptions['apartmentType'] })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    {apartmentTypes.map((type) => (
                                        <SelectItem key={type} value={type}>
                                            {type}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Location Filter */}
                        <div>
                            <label className="text-sm font-medium mb-2 block">Location</label>
                            <Select
                                value={filters.location}
                                onValueChange={(value) => onFiltersChange({ ...filters, location: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Locations</SelectItem>
                                    {locations.map((location) => (
                                        <SelectItem key={location} value={location}>
                                            {location}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Purpose Filter */}
                        <div>
                            <label className="text-sm font-medium mb-2 block">Booking Purpose</label>
                            <Select
                                value={filters.purpose}
                                onValueChange={(value) => onFiltersChange({ ...filters, purpose: value as FilterOptions['purpose'] })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select purpose" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Purposes</SelectItem>
                                    <SelectItem value="shortlet">Shortlet</SelectItem>
                                    <SelectItem value="longlet">Longlet</SelectItem>
                                    <SelectItem value="party">Party</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Price Range Filter */}
                        <div>
                            <label className="text-sm font-medium mb-2 block">
                                Price Range: ₦{filters.priceRange[0].toLocaleString()} - ₦{filters.priceRange[1].toLocaleString()}
                            </label>
                            <div className="px-2">
                                <Slider
                                    value={filters.priceRange}
                                    onValueChange={handlePriceRangeChange}
                                    max={200000}
                                    min={0}
                                    step={5000}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>₦0</span>
                                <span>₦200,000</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};
