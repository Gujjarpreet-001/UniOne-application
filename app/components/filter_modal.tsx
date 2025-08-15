import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const locationsList = [
  "Delhi",
    "Mumbai",
    "Bangalore",
    "Kolkata",
    "Chennai",
];

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
  onApply: (selectedLocations: string[]) => void;
  onClear?: () => void;
};

export default function FilterModal({ visible, onClose, onApply, onClear }: FilterModalProps) {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const toggleLocation = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((item) => item !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const handleClear = () => {
    setSelectedLocations([]);
    onClear?.();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
        transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Filters</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Location Filters */}
          <FlatList
            data={locationsList}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              const selected = selectedLocations.includes(item);
              return (
                <TouchableOpacity
                  style={[styles.locationItem, selected && styles.locationSelected]}
                  onPress={() => toggleLocation(item)}
                >
                  <Text style={[styles.locationText, selected && styles.locationTextSelected]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />

          {/* Footer Buttons */}
          <View style={styles.footer}>
            <TouchableOpacity style={styles.clearBtn} onPress={handleClear}>
              <Text style={styles.clearBtnText}>Clear Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.applyBtn}
              onPress={() => onApply(selectedLocations)}
            >
              <Text style={styles.applyBtnText}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: "80%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  locationItem: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
    marginVertical: 4,
  },
  locationSelected: {
    backgroundColor: "#007bff20",
    borderWidth: 1,
    borderColor: "#007bff",
  },
  locationText: {
    fontSize: 16,
    color: "#333",
  },
  locationTextSelected: {
    color: "#007bff",
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  clearBtn: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#999",
    marginRight: 8,
    alignItems: "center",
  },
  clearBtnText: {
    color: "#333",
    fontWeight: "500",
  },
  applyBtn: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#007bff",
    alignItems: "center",
  },
  applyBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
